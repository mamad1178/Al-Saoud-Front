const Item = (props) => {
	return <div className = 'font-popReg w-[170px] h-[190px] bg-green-200 flex flex-col gap-5 justify-center items-center cursor-pointer'>
		<img className = '' src = {props.item.icon} alt = ''/>
		<strong className = 'text-green-900'>{props.item.title}</strong>
	</div>
}

export default Item;