'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

const { Title, Text } = Typography

const deviceCategories = [
  'Pathology',
  'Pulmonology',
  'Cardiology',
  'Radiology',
  'Neonatology',
  'Neurosurgery',
]

const deviceConditions = ['New', 'Used', 'Refurbished']

export default function DeviceListingPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false)
  const [searchFilters, setSearchFilters] = useState({
    category: '',
    condition: '',
  })
  const [sortField, setSortField] = useState<string>('price')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const { data: devices, refetch } = Api.device.findMany.useQuery({
    include: { seller: true },
    orderBy: { [sortField]: sortOrder },
    where: {
      AND: [
        searchFilters.category
          ? {
              category: {
                contains: searchFilters.category,
                mode: 'insensitive',
              },
            }
          : {},
        searchFilters.condition
          ? {
              condition: {
                contains: searchFilters.condition,
                mode: 'insensitive',
              },
            }
          : {},
      ],
    },
  })

  const { mutateAsync: createDevice } = Api.device.create.useMutation()

  const handleCreateDevice = async (values: any) => {
    try {
      await createDevice({
        data: {
          ...values,
          sellerId: user?.id || '',
          status: 'AVAILABLE',
          specifications: values.specifications
            ? JSON.parse(values.specifications)
            : {},
          certifications: values.certifications
            ? JSON.parse(values.certifications)
            : {},
        },
      })
      enqueueSnackbar('Device created successfully', { variant: 'success' })
      setIsCreateModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Error creating device', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <a onClick={() => router.push(`/devices/${record.id}`)}>{text}</a>
      ),
    },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Condition', dataIndex: 'condition', key: 'condition' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'Seller',
      dataIndex: ['seller', 'name'],
      key: 'seller',
    },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ]

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={2}>Device Listings</Title>
          </Col>
          {user && (
            <Col>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setIsCreateModalVisible(true)}
              >
                Create Listing
              </Button>
            </Col>
          )}
        </Row>
        <Card
          title={
            <Space>
              <SearchOutlined /> Advanced Search
            </Space>
          }
        >
          <Form layout="vertical">
            <Row gutter={16}>
              <Col xs={24} sm={12} md={6}>
                <Form.Item label="Category">
                  <Select
                    allowClear
                    placeholder="Select category"
                    onChange={value =>
                      setSearchFilters(prev => ({
                        ...prev,
                        category: value?.toLowerCase(),
                      }))
                    }
                  >
                    {deviceCategories.map(category => (
                      <Select.Option
                        key={category}
                        value={category.toLowerCase()}
                      >
                        {category}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Form.Item label="Condition">
                  <Select
                    allowClear
                    placeholder="Select condition"
                    onChange={value =>
                      setSearchFilters(prev => ({ ...prev, condition: value }))
                    }
                  >
                    {deviceConditions.map(condition => (
                      <Select.Option key={condition} value={condition}>
                        {condition}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Table
          columns={columns}
          dataSource={devices}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Create New Device Listing"
          open={isCreateModalVisible}
          onCancel={() => setIsCreateModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleCreateDevice} layout="vertical">
            <Form.Item
              name="name"
              label="Device Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true }]}
            >
              <Select>
                {deviceCategories.map(category => (
                  <Select.Option key={category} value={category}>
                    {category}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="condition"
              label="Condition"
              rules={[{ required: true }]}
            >
              <Select>
                {deviceConditions.map(condition => (
                  <Select.Option key={condition} value={condition}>
                    {condition}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="specifications" label="Specifications (JSON)">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="certifications" label="Certifications (JSON)">
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Device
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </PageLayout>
  )
}
