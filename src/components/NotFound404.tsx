import { Button, Result } from 'antd'
import { useNavigate } from 'react-router'

export const NotFound404 = () => {
	const navigate = useNavigate()

	function clickHandler() {
		navigate(-1)
	}

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={clickHandler}>
					Вернуться
				</Button>
			}
		/>
	)
}
