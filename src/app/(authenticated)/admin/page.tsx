'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import {
  ExclamationCircleOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Card, Col, Row, Space, Table, Tag, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

export default function AdminDashboardPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [selectedUser, setSelectedUser] = useState<string | null>(null)

  // Fetch users
  const { data: users, refetch: refetchUsers } = Api.user.findMany.useQuery({
    include: { devicesAsSeller: true },
  })

  // Fetch devices
  const { data: devices } = Api.device.findMany.useQuery({
    include: { seller: true },
  })

  // Fetch recalls
  const { data: recalls } = Api.recall.findMany.useQuery({
    include: { device: true, issuedBy: true },
  })

  // Mutations
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const handleVerifyUser = async (userId: string) => {
    try {
      await updateUser({
        where: { id: userId },
        data: { status: 'VERIFIED' },
      })
      enqueueSnackbar('User verified successfully', { variant: 'success' })
      refetchUsers()
    } catch (error) {
      enqueueSnackbar('Failed to verify user', { variant: 'error' })
    }
  }

  const userColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'VERIFIED' ? 'green' : 'orange'}>{status}</Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Space>
          {record.status === 'INVITED' && (
            <Button type="primary" onClick={() => handleVerifyUser(record.id)}>
              Verify
            </Button>
          )}
        </Space>
      ),
    },
  ]

  const deviceColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Seller',
      key: 'seller',
      render: (record: any) => record.seller?.name || 'N/A',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Button onClick={() => router.push(`/devices/${record.id}`)}>
          View Details
        </Button>
      ),
    },
  ]

  const recallColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Severity', dataIndex: 'severity', key: 'severity' },
    {
      title: 'Device',
      key: 'device',
      render: (record: any) => record.device?.name || 'N/A',
    },
    {
      title: 'Issued By',
      key: 'issuedBy',
      render: (record: any) => record.issuedBy?.name || 'N/A',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Admin Dashboard</Title>
      <Text>
        Manage users, devices, and regulatory compliance from one place.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={8}>
          <Card>
            <UserOutlined style={{ fontSize: 24 }} />
            <Title level={4}>Users</Title>
            <Text>{users?.length || 0} total users</Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <ShopOutlined style={{ fontSize: 24 }} />
            <Title level={4}>Devices</Title>
            <Text>{devices?.length || 0} listed devices</Text>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <ExclamationCircleOutlined style={{ fontSize: 24 }} />
            <Title level={4}>Recalls</Title>
            <Text>{recalls?.length || 0} active recalls</Text>
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: 24 }}>
        <Title level={4}>User Management</Title>
        <Table
          dataSource={users || []}
          columns={userColumns}
          rowKey="id"
          scroll={{ x: true }}
        />
      </Card>

      <Card style={{ marginTop: 24 }}>
        <Title level={4}>Device Listings</Title>
        <Table
          dataSource={devices || []}
          columns={deviceColumns}
          rowKey="id"
          scroll={{ x: true }}
        />
      </Card>

      <Card style={{ marginTop: 24 }}>
        <Title level={4}>Recall Notifications</Title>
        <Table
          dataSource={recalls || []}
          columns={recallColumns}
          rowKey="id"
          scroll={{ x: true }}
        />
      </Card>
    </PageLayout>
  )
}
