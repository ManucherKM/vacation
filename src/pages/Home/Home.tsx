import banner from '@/assets/img/Banner.png'
import { NavBar } from '@/components'
import { Button } from 'antd'
import classes from './Home.module.scss'

export const Home = () => {
	return (
		<div className={classes.root}>
			<NavBar />
			<header className={classes.header}>
				<img className={classes.img} src={banner} alt="img" />
				<a href="https://github.com/ManucherKM/vacation">
					<Button type="dashed" size="large">
						GitHub
					</Button>
				</a>
			</header>
		</div>
	)
}
