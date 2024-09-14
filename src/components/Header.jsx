import { useState } from 'react';
import { demacLogo, menu, close } from '../assets/assets';
import { navLinks } from '../constants/constants';
const Header = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="navBar">
			{/* Desktop */}
			<a href='http://localhost:5173/'>
				<img src={demacLogo} alt="Constructora Demac logo" className="logoImage"
				/>
			</a>
			<ul className="navLinkContainer">
				{navLinks.map((nav, index) =>
					<li
						key={nav.id}
						className='mr-40'
					>
						<a className='navLinks' href={`#${nav.id}`}>
							{nav.title}
						</a>
					</li>)}
			</ul>
			{/* Mobile */}
			<div className="hideMobile">
				<img src={toggle ? close : menu}
					alt="menu"
					className=""
					onClick={() => setToggle((prev => !prev))}
				/>
				<div className="">
					<ul className="">
						{navLinks.map((nav, index) =>
							<li
								key={nav.id}
								className={`${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
							>
								<a href={`#${nav.id}`}>
									{nav.title}
								</a>
							</li>)}
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Header