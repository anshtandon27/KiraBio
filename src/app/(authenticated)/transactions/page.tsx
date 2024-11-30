'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { DownloadOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import { Button, Space, Table, Tabs, Tag, Typography } from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
const { Title, Text } = Typography
type TransactionWithDevice = Prisma.TransactionGetPayload<{
  include: { device: true }
}>

export default function TransactionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: transactions, isLoading } = Api.transaction.findMany.useQuery({
    where: { buyerId: user?.id },
    include: { device: true },
    orderBy: { createdAt: 'desc' },
  })

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

  const getShippingStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'green'
      case 'Shipped':
        return 'blue'
      case 'Pending':
        return 'orange'
      default:
        return 'default'
    }
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('MMM D, YYYY'),
    },
    {
      title: 'Device',
      dataIndex: 'device',
      key: 'device',
      render: (device: any) => (
        <Text
          onClick={() => router.push(`/devices/${device.id}`)}
          style={{ cursor: 'pointer', color: '#1890ff' }}
        >
          {device.name}
        </Text>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => <Text>{type}</Text>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: string) => `$${amount}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: 'Shipping',
      dataIndex: 'shippingStatus',
      key: 'shippingStatus',
      render: (status: string) =>
        status ? (
          <Tag color={getShippingStatusColor(status)}>{status}</Tag>
        ) : (
          '-'
        ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: TransactionWithDevice) => (
        <Space>
          {record.documentUrl && (
            <Button
              icon={<DownloadOutlined />}
              onClick={() => window.open(record.documentUrl, '_blank')}
              size="small"
            >
              Documents
            </Button>
          )}
        </Space>
      ),
    },
  ]

  const filterTransactions = (type: string) => {
    return (
      transactions?.filter(t => t.type.toLowerCase() === type.toLowerCase()) ||
      []
    )
  }

  const tabItems = [
    {
      key: 'all',
      label: 'All Transactions',
      children: (
        <Table
          bordered
          dataSource={transactions}
          columns={columns}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      ),
    },
    {
      key: 'sales',
      label: 'Sales',
      children: (
        <Table
          bordered
          dataSource={filterTransactions('Sale')}
          columns={columns}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      ),
    },
    {
      key: 'rentals',
      label: 'Rentals',
      children: (
        <Table
          bordered
          dataSource={filterTransactions('Rent')}
          columns={columns}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>Transaction History</Title>
        <Text
          type="secondary"
          style={{ marginBottom: '24px', display: 'block' }}
        >
          View and manage your transactions, track shipping status, and access
          transaction documents.
        </Text>

        <Tabs
          items={tabItems}
          defaultActiveKey="all"
          style={{ marginTop: '24px' }}
        />
      </div>
    </PageLayout>
  )
}
