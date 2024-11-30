'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { CheckOutlined, HistoryOutlined, PlusOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography
type ModificationWithRelations = Prisma.ModificationGetPayload<{
  include: {
    device: true
    requester: true
    engineer: true
  }
}>

export default function DeviceModificationsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState<string>('')
  const [form] = Form.useForm()

  const { data: modifications, refetch } = Api.modification.findMany.useQuery({
    include: {
      device: true,
      requester: true,
      engineer: true,
    },
  })

  const { data: devices } = Api.device.findMany.useQuery({})

  const { mutateAsync: createModification } =
    Api.modification.create.useMutation()
  const { mutateAsync: updateModification } =
    Api.modification.update.useMutation()

  const handleCreateModification = async (values: any) => {
    try {
      await createModification({
        data: {
          description: values.description,
          status: 'PENDING',
          deviceId: selectedDevice,
          requesterId: user?.id || '',
          engineerId: values.engineerId || user?.id,
        },
      })
      enqueueSnackbar('Modification request created successfully', {
        variant: 'success',
      })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Error creating modification request', {
        variant: 'error',
      })
    }
  }

  const handleAcceptModification = async (id: string) => {
    try {
      await updateModification({
        where: { id },
        data: { status: 'APPROVED' },
      })
      enqueueSnackbar('Modification request approved', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error approving modification request', {
        variant: 'error',
      })
    }
  }

  const columns = [
    {
      title: 'Device',
      dataIndex: ['device', 'name'],
      key: 'device',
      width: 150,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 250,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: string) => (
        <Tag
          color={
            status === 'Completed'
              ? 'green'
              : status === 'Requested'
                ? 'blue'
                : status === 'InProgress'
                  ? 'orange'
                  : 'default' // Fallback color
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Requester',
      dataIndex: ['requester', 'name'],
      key: 'requester',
      width: 150,
    },
    {
      title: 'Engineer',
      dataIndex: ['engineer', 'name'],
      key: 'engineer',
      width: 150,
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      render: (record: ModificationWithRelations) => (
        <Space>
          {checkRole('ENGINEER') && record.status === 'PENDING' && (
            <Button
              type="primary"
              icon={<CheckOutlined />}
              onClick={() => handleAcceptModification(record.id)}
            >
              Accept
            </Button>
          )}
          <Button
            icon={<HistoryOutlined />}
            onClick={() => router.push(`/devices/${record.deviceId}`)}
          >
            View Device
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        style={{ width: '100%', padding: '24px 144px' }}
        size="large"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title level={2}>Device Modifications</Title>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
          >
            New Modification Request
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={modifications}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          bordered
          style={{ width: '100%' }}
        />

        <Modal
          title="Create Modification Request"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form
            form={form}
            onFinish={handleCreateModification}
            layout="vertical"
          >
            <Form.Item
              label="Select Device"
              name="deviceId"
              rules={[{ required: true, message: 'Please select a device' }]}
            >
              <Select
                onChange={value => setSelectedDevice(value)}
                options={devices?.map(device => ({
                  value: device.id,
                  label: device.name,
                }))}
              />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: 'Please enter a description' },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Request
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </PageLayout>
  )
}
