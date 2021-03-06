import React from 'react';
import githubLogo from '../../assets/logos/github_logo.png';

export default function Footer() {
	return (
		<div className="footer">
			<a href="https://github.com/a-khoirunnufus" className="footer--link">
				<img className="footer--logo" src={githubLogo} alt="github logo" />
			</a>
			<p className="footer--text">MADE BY AHMADKHOIRUNNUFUS</p>
		</div>
	);
}