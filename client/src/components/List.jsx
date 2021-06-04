import Item from './Item'

const List = () => {

  const items = [
    { id: 1, title: 'item1' },
    { id: 2, title: 'item2' },
		{ id: 3, title: 'item3' },
		{ id: 4, title: 'item4' },
		{ id: 5, title: 'item5' },
	];

	return (
		<ul className='list-group'>
			{items.map((item) => (
				<Item id={item.id} title={item.title}  />
			))}
		</ul>
	);

}

export default List;