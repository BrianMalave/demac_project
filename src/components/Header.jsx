import { useState } from 'react';
import { demacLogoGray, menuMobile, menuClose, demacMenu, demacLogoAlone } from '../assets/assets';
import { navLinks } from '../constants/constants';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="navBar">
			{/* Desktop */}
			<a href="http://localhost:5173/">
				<img src={demacLogoGray} alt="Constructora Demac logo" className="logoImage" />
			</a>
			<ul className="navLinkContainer">
				{navLinks.map((nav, index) => (
					<li key={nav.id} className="mr-40">
						<a className="navLinks" href={`#${nav.id}`}>
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			{/* Mobile */}
			<div className="mobileMenu">
				<img
					src={toggle ? menuClose : menuMobile}
					alt="menu"
					className="menuIcon"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div className={`menuMobileContainer ${toggle ? 'showMenu' : 'hideMenu'}`}>
					<ul className="menuMobileList">
						<div className='menuMobileLogo'>
							<img src={demacMenu} alt="Constructora Demac logo" className="menuLogoImage" />
						</div>
						{navLinks.map((nav, index) => (
							<li key={nav.id} className={`${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
								<a href={`#${nav.id}`} onClick={() => setToggle(false)}> {/* Cierra el menú al hacer clic */}
									{nav.title}
								</a>
							</li>
						))}
						<div className='menuMobileLogoAlone'>
							<img src={demacLogoAlone} alt="Constructora Demac logo" className="menuLogoImageAlone" />
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
