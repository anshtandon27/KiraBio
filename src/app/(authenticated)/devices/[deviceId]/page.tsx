'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  EditOutlined,
  ShoppingCartOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import {
  Button,
  Card,
  Descriptions,
  Form,
  Input,
  Modal,
  Space,
  Tag,
  Timeline,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

export default function DeviceDetailsPage() {
  const router = useRouter()
  const params = useParams<{ deviceId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [modificationModal, setModificationModal] = useState(false)
  const [form] = Form.useForm()

  const { data: device, refetch } = Api.device.findFirst.useQuery({
    where: { id: params.deviceId },
    include: {
      seller: true,
      maintenances: { include: { performedBy: true } },
      modifications: { include: { requester: true, engineer: true } },
    },
  })

  const { mutateAsync: createTransaction } =
    Api.transaction.create.useMutation()
  const { mutateAsync: createModification } =
    Api.modification.create.useMutation()
  const { mutateAsync: updateDevice } = Api.device.update.useMutation()

  const handlePurchase = async () => {
    try {
      await createTransaction({
        data: {
          type: 'PURCHASE',
          status: 'PENDING',
          amount: device?.price || '0',
          buyerId: user?.id || '',
          deviceId: device?.id || '',
        },
      })
      enqueueSnackbar('Purchase initiated successfully', { variant: 'success' })
      router.push('/transactions')
    } catch (error) {
      enqueueSnackbar('Failed to initiate purchase', { variant: 'error' })
    }
  }

  const handleModificationRequest = async (values: { description: string }) => {
    try {
      await createModification({
        data: {
          description: values.description,
          status: 'PENDING',
          deviceId: device?.id || '',
          requesterId: user?.id || '',
          engineerId: device?.sellerId || '',
        },
      })
      enqueueSnackbar('Modification request submitted', { variant: 'success' })
      setModificationModal(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to submit modification request', {
        variant: 'error',
      })
    }
  }

  const handleUpdateStatus = async (newStatus: string) => {
    try {
      await updateDevice({
        where: { id: device?.id },
        data: { status: newStatus },
      })
      enqueueSnackbar('Device status updated', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update status', { variant: 'error' })
    }
  }

  if (!device) return null

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Device Details</Title>

        <Card>
          <Descriptions title="Device Specifications" bordered>
            <Descriptions.Item label="Name">{device.name}</Descriptions.Item>
            <Descriptions.Item
              label="Category"
              style={{ whiteSpace: 'nowrap' }}
            >
              {device.category}
            </Descriptions.Item>
            <Descriptions.Item label="Condition">
              {device.condition}
            </Descriptions.Item>
            <Descriptions.Item label="Price">${device.price}</Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={device.status === 'AVAILABLE' ? 'green' : 'red'}>
                {device.status}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Seller">
              {device.seller?.name}
            </Descriptions.Item>
          </Descriptions>

          {device.specifications && (
            <Card title="Technical Specifications" style={{ marginTop: 16 }}>
              {Object.entries(
                device.specifications as Record<string, string>,
              ).map(([key, value]) => (
                <p key={key}>
                  <Text strong>{key}:</Text> {value}
                </p>
              ))}
            </Card>
          )}

          <Space style={{ marginTop: 16 }}>
            {user?.id !== device.sellerId && (
              <>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={handlePurchase}
                  disabled={device.status !== 'AVAILABLE'}
                >
                  Purchase Device
                </Button>
                <Button
                  icon={<ToolOutlined />}
                  onClick={() => setModificationModal(true)}
                >
                  Request Modification
                </Button>
              </>
            )}
            {user?.id === device.sellerId && (
              <Button
                icon={<EditOutlined />}
                onClick={() =>
                  handleUpdateStatus(
                    device.status === 'AVAILABLE' ? 'UNAVAILABLE' : 'AVAILABLE',
                  )
                }
              >
                Toggle Availability
              </Button>
            )}
          </Space>
        </Card>

        <Card title="Maintenance History">
          <Timeline>
            {device.maintenances?.map(maintenance => (
              <Timeline.Item key={maintenance.id}>
                <Text strong>{maintenance.description}</Text>
                <br />
                <Text type="secondary">
                  Performed by {maintenance.performedBy?.name} on{' '}
                  {maintenance.date}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Card>

        <Card title="Modification Requests">
          <Timeline>
            {device.modifications?.map(mod => (
              <Timeline.Item
                key={mod.id}
                dot={
                  mod.status === 'COMPLETED' ? (
                    <CheckCircleOutlined />
                  ) : (
                    <ClockCircleOutlined />
                  )
                }
              >
                <Text strong>{mod.description}</Text>
                <br />
                <Text type="secondary">
                  Requested by {mod.requester?.name} on{' '}
                  {dayjs(mod.createdAt).format('MMMM D, YYYY')}
                </Text>
                <Tag color={mod.status === 'COMPLETED' ? 'green' : 'blue'}>
                  {mod.status}
                </Tag>
              </Timeline.Item>
            ))}
          </Timeline>
        </Card>
      </Space>

      <Modal
        title="Request Device Modification"
        open={modificationModal}
        onCancel={() => setModificationModal(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleModificationRequest}>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: 'Please describe the modification needed',
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Describe the modification you need..."
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Request
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
