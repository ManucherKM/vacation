import { history } from '@/configuration/history'
import { EOptionWorkerDashboard, ERoutes } from '@/configuration/routes'
import { useAuthStore } from '@/storage'
import { UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { FC, ReactNode, createElement } from 'react'
import { useNavigate } from 'react-router'

const { Header, Content, Footer, Sider } = Layout

export interface ILayoutWorker {
	children: ReactNode
}

export const LayoutWorker: FC<ILayoutWorker> = ({ children }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const logout = useAuthStore(store => store.logout)
	const navigate = useNavigate()

	function logoutHandler() {
		logout()
		navigate(ERoutes.home)
	}

	const menuItems = [
		{
			key: 'Выход',
			label: 'Выход',
			onClick: logoutHandler,
		},
	]

	const siderItems = [
		{
			key: 'Отпуск',
			label: 'Отпуск',
			icon: createElement(UserOutlined),
			children: [
				{
					key: 'Календарь',
					label: 'Календарь',
					onClick: function () {
						history.push(
							ERoutes.workerdashboard + '/' + EOptionWorkerDashboard.calendar,
						)
					},
				},
				{
					key: 'Подать заявку',
					label: 'Подать заявку',
					onClick: function () {
						history.push(
							ERoutes.workerdashboard + '/' + EOptionWorkerDashboard.apply,
						)
					},
				},
				{
					key: 'История',
					label: 'История',
					onClick: function () {
						history.push(
							ERoutes.workerdashboard + '/' + EOptionWorkerDashboard.history,
						)
					},
				},
				
			],
		},
	]

	return (
		<Layout style={{ height: '100%' }}>
			<Header style={{ display: 'flex', alignItems: 'center' }}>
				<Menu theme="dark" mode="horizontal" items={menuItems} />
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
				<Layout
					style={{
						padding: '24px 0',
						background: colorBgContainer,
						height: '100%',
					}}
				>
					<Sider style={{ background: colorBgContainer }} width={200}>
						<Menu
							mode="inline"
							style={{ height: '100%' }}
							defaultOpenKeys={['Отдых']}
							defaultSelectedKeys={['Календарь']}
							items={siderItems}
						/>
					</Sider>
					<Content style={{ padding: '0 24px', minHeight: 280 }}>
						{children}
					</Content>
				</Layout>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Vacation ©2023</Footer>
		</Layout>
	)
}
