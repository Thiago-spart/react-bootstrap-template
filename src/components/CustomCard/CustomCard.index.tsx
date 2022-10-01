import type { CustomCardProps } from "./CustomCard.types"

export const CustomCard: React.FC<CustomCardProps> = ({ bodyContent, link, title }) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{bodyContent}</p>
				<a href={link} className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	)
}