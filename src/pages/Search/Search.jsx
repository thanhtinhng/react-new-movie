// const MovieSearch = props => {

//     const navigate = useNavigate();

//     const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

//     const goToSearch = useCallback(() => {
//         if (keyword.trim().length > 0) {
//             navigate(`/${category[props.category]}/search/${keyword}`);
//         }
//     }, [keyword, props.category, navigate]);

//     useEffect(() => {
//         const enterEvent = (e) => {
//             e.preventDefault();
//             if (e.keyCode === 13) {
//                 goToSearch();
//             }
//         }
//         document.addEventListener('keyup', enterEvent);
//         return () => {
//             document.removeEventListener('keyup', enterEvent);
//         };
//     }, [keyword, goToSearch]);

//     return (
//         <div className="movie-search">
//             {/* <Input
//                 type="text"
//                 placeholder="Enter keyword"
//                 value={keyword}
//                 onChange={(e) => setKeyword(e.target.value)}
//             /> */}
//             <Button className="small" onClick={goToSearch}>Search</Button>
//         </div>
//     )
// }