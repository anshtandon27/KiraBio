'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import {
  CheckOutlined,
  CloseOutlined,
  MessageOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Typography,
} from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography
type CustomRequestWithRelations = Prisma.CustomRequestGetPayload<{
  include: { requester: true; fabricator: true }
}>

export default function CustomRequestsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const { data: requests, refetch } = Api.customRequest.findMany.useQuery({
    include: { requester: true, fabricator: true },
  })

  const { mutateAsync: createRequest } = Api.customRequest.create.useMutation()
  const { mutateAsync: updateRequest } = Api.customRequest.update.useMutation()

  const handleCreateRequest = async (values: any) => {
    try {
      await createRequest({
        data: {
          specifications: values.specifications,
          status: 'PENDING',
          description: values.description,
          requesterId: user?.id || '',
          fabricatorId: values.fabricatorId,
        },
      })
      enqueueSnackbar('Request created successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Error creating request', { variant: 'error' })
    }
  }

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await updateRequest({
        where: { id },
        data: { status },
      })
      enqueueSnackbar('Status updated successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error updating status', { variant: 'error' })
    }
  }

  const { data: fabricators } = Api.user.findMany.useQuery({
    where: { globalRole: 'FABRICATOR' },
  })

  const columns = [
    {
      title: 'Requester',
      dataIndex: ['requester', 'name'],
      key: 'requester',
    },
    {
      title: 'Fabricator',
      dataIndex: ['fabricator', 'name'],
      key: 'fabricator',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: CustomRequestWithRelations) => (
        <Space>
          {user?.id === record.fabricatorId && record.status === 'PENDING' && (
            <>
              <Button
                type="primary"
                icon={<CheckOutlined />}
                onClick={() => handleStatusUpdate(record.id, 'ACCEPTED')}
              >
                Accept
              </Button>
              <Button
                danger
                icon={<CloseOutlined />}
                onClick={() => handleStatusUpdate(record.id, 'REJECTED')}
              >
                Reject
              </Button>
            </>
          )}
          <Button
            icon={<MessageOutlined />}
            onClick={() =>
              enqueueSnackbar('Chat feature coming soon', { variant: 'info' })
            }
          >
            Chat
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <div style={{ textAlign: 'center' }}>
          <Title level={2}>Custom Device Fabrication Requests</Title>
          <Text>Create and manage custom device fabrication requests</Text>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
          >
            New Request
          </Button>
        </div>

        <Card>
          <Table
            columns={columns}
            dataSource={requests}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Card>

        <Modal
          title="Create Custom Request"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateRequest} layout="vertical">
            <Form.Item
              name="fabricatorId"
              label="Select Fabricator"
              rules={[{ required: true }]}
            >
              <Select>
                {fabricators?.map(fab => (
                  <Select.Option key={fab.id} value={fab.id}>
                    {fab.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="specifications"
              label="Specifications"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item name="description" label="Additional Description">
              <Input.TextArea rows={2} />
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
