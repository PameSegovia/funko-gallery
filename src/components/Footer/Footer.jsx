
import "./Footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
	return (

		<div className="footer-content">
			<p>Pamela Segovia</p>
			<div className="btns">
				<a href="https://github.com/PameSegovia">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="https://www.linkedin.com/in/pame-segovia/">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
		</div>

	)
}
