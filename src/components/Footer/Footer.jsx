
import "./Footer.css"
import { AiFillGithub, FaLinkedin } from 'react-icons/ai';


export const Footer = () => {
	return (

		<div className="footer-content">
			<p>Pamela Segovia</p>
			<div className="btns">

				<a href="https://github.com/PameSegovia">
					<AiFillGithub />
				</a>
				<a href="https://www.linkedin.com/in/pame-segovia/">
					<FaLinkedin />
				</a>
			</div>
		</div>

	)
}
