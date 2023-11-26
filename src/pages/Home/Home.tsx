import banner from '@/assets/img/Banner.png'
import { NavBar } from '@/components'
import classes from './Home.module.scss'

export const Home = () => {
	return (
		<div className={classes.root}>
			<NavBar />
			<header className={classes.header}>
				<img className={classes.img} src={banner} alt="img" />
			</header>
		</div>
	)
}
