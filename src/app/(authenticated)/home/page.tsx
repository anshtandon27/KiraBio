'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import {
  HistoryOutlined,
  ShoppingOutlined,
  WarningOutlined,
} from '@ant-design/icons'
import { Button, Card, Col, List, Row, Space, Tag, Typography } from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

// Define the interface for the transaction object
interface Transaction {
  id: string
  type: string
  status: string
  amount: string
  shippingStatus: string
  documentUrl: string
  buyerId: string
  deviceId: string
  device?: { name: string } // Ensure device is optional
  createdAt: string
}

// Define the interface for the recall object
interface Recall {
  id: string
  title: string
  description: string
  severity: string
  deviceId: string
  issuedById: string
  createdAt: string
  device?: { name: string } // Ensure device is optional
}

// Define the interface for the custom request object
interface CustomRequest {
  id: string
  status: string
  createdAt: string
  description: string
}

// Define the getStatusColor function
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'green'
    case 'Pending':
      return 'blue'
    case 'Cancelled':
      return 'red'
    default:
      return 'default'
  }
}

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [searchTerm, setSearchTerm] = useState<string>('')

  // Fetch featured devices
  const { data: featuredDevices } = Api.device.findMany.useQuery({
    take: 8,
    orderBy: { createdAt: 'desc' },
  })

  // Fetch user's recent transactions
  const { data: recentTransactions } = Api.transaction.findMany.useQuery({
    where: { buyerId: user?.id },
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { device: true },
  })

  // Fetch open custom requests
  const { data: pendingRequests, error: requestsError } =
    Api.customRequest.findMany.useQuery({
      where: {
        status: 'Open',
      },
      take: 50,
      orderBy: { createdAt: 'desc' },
    })

  // Fetch recent recalls
  const { data: urgentRecalls, isLoading: isLoadingRecalls } =
    Api.recall.findMany.useQuery({
      where: {
        severity: 'High',
      },
      take: 50,
      include: { device: true },
      orderBy: { createdAt: 'desc' },
    })

  const deviceCategories = [
    'Pathology',
    'Pulmonology',
    'Cardiology',
    'Radiology',
    'Neonatology',
    'Neurosurgery',
  ]

  const filteredDevices = featuredDevices?.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredRequests = pendingRequests?.filter(request =>
    request.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Medical Device Marketplace</Title>
      <Text type="secondary">
        Browse, purchase, and manage medical devices all in one place
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {/* Featured Devices */}
        <Col xs={24}>
          <Card
            title={
              <Space>
                <ShoppingOutlined /> Featured Devices
              </Space>
            }
          >
            <Row gutter={[16, 16]}>
              {filteredDevices?.map(device => (
                <Col xs={24} sm={12} md={6} key={device.id}>
                  <Card
                    hoverable
                    onClick={() => router.push(`/devices/${device.id}`)}
                  >
                    <Text strong>{device.name}</Text>
                    <br />
                    <Text type="secondary">{device.category}</Text>
                    <br />
                    <Text type="success">${device.price}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* Quick Filters */}
        <Col xs={24}>
          <Card title="Browse by Category">
            <Row gutter={[8, 8]}>
              {deviceCategories.map(category => (
                <Col key={category}>
                  <Tag
                    style={{ cursor: 'pointer', padding: '4px 8px' }}
                    onClick={() => router.push(`/devices?category=${category}`)}
                  >
                    {category}
                  </Tag>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* Recent Activities */}
        <Col xs={24} md={12}>
          <Card
            title={
              <Space>
                <HistoryOutlined /> Recent Activities
              </Space>
            }
            extra={
              <Button type="link" onClick={() => router.push('/transactions')}>
                View All
              </Button>
            }
          >
            <List
              size="small"
              dataSource={recentTransactions as Transaction[]} // Type assertion for recentTransactions
              renderItem={transaction => (
                <List.Item>
                  <Space>
                    <Text>
                      {
                        (transaction as Transaction).device?.name // Updated type assertion
                      }
                    </Text>
                    <Tag
                      color={getStatusColor(
                        (transaction as Transaction).status,
                      )}
                    >
                      {(transaction as Transaction).status}
                    </Tag>
                    <Text type="secondary">
                      {dayjs((transaction as Transaction).createdAt).format(
                        'MMM D, YYYY',
                      )}
                    </Text>
                  </Space>
                </List.Item>
              )}
            />

            <Title level={5} style={{ marginTop: 16 }}>
              Open Requests ({filteredRequests?.length || 0})
            </Title>
            <List
              size="small"
              dataSource={filteredRequests as CustomRequest[]}
              renderItem={(request: CustomRequest) => (
                <List.Item>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space>
                      <Text>Custom Request</Text>
                      <Tag color="processing">{request.status}</Tag>
                    </Space>
                    <Text type="secondary" ellipsis>
                      {request.description}
                    </Text>
                    <Text type="secondary">
                      Issued: {dayjs(request.createdAt).format('MMM D, YYYY')}
                    </Text>
                  </Space>
                </List.Item>
              )}
              locale={{ emptyText: 'No open requests' }}
            />
          </Card>
        </Col>

        {/* Urgent Recalls */}
        <Col xs={24} md={12}>
          <Card
            title={
              <Space>
                <WarningOutlined style={{ color: '#ff4d4f' }} /> Urgent Recalls
              </Space>
            }
          >
            <List
              size="small"
              dataSource={urgentRecalls}
              renderItem={(recall: Recall) => (
                <List.Item>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space>
                      <Text strong>{recall.title}</Text>
                      <Tag color="error">High Severity</Tag>
                    </Space>
                    <Text type="secondary">
                      Device: {recall.device?.name || 'Unknown Device'}
                    </Text>
                    <Text type="secondary" ellipsis>
                      {recall.description}
                    </Text>
                    <Text type="secondary">
                      Issued: {dayjs(recall.createdAt).format('MMM D, YYYY')}
                    </Text>
                  </Space>
                </List.Item>
              )}
              locale={{ emptyText: 'No urgent recalls' }}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
