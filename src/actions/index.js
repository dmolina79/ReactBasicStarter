export function selectBook(book){
	//select book is an action creator it returns an action
	return {
		type: 'BOOK_SELECTED',
		payload: book	
	};
}