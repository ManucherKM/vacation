import { FormLogin } from '@/components/FormLogin/FormLogin'
import classes from './Login.module.scss'

export const Login = () => {
	return (
		<div className={classes.root}>
			<FormLogin />
		</div>
	)
}
