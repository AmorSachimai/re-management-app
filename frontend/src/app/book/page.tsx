async function getData() {
    try {
        const res = await fetch('http://127.0.0.1:8000/book/list/');
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch {
        return [];
    }
}

export default async function Page() {
    const bookList: any[] = await getData();

    return (
        <main>
            {bookList.map((book, index) => {
                return <div key={'book-' + String(index)}>{book.name}</div>;
            })}
        </main>
    );
}
