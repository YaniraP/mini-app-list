import Item from './Item';
import {useSelector} from 'react-redux';

const List = () => {

	const items = useSelector((state) => state.items)


	return (
		<div>
				{items.map((item) => (
					<Item id={item.id} text={item.text}  />
				))}
		</div>
	);

}

export default List;