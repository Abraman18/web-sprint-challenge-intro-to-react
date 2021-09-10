// Write your Character component here
import react from "react"

const Character = (props) => {
	const {data}=props
		return (
			<div>
				<div className='name'>
					<h2>{data.name}</h2>
				</div>
			<div className='info'>
				<p>Height: {data.height}</p>
				<p>Mass: {data.mass}</p>
				<p>Hair color: {data.hair_color}</p>
				<p>Skin Color: {data.skin_color}</p>
				<p>Birth Year: {data.birth_year}</p>
				<p>Eye Color: {data.eye_color}</p>
				<p>Birth Year: {data.birth_year}</p>
				<p>Gender: {data.gender}</p>
			</div>
			</div>
		)
	 }
export default Character