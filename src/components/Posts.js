
const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(value => <div key={value.id}>
                {value.id}
                {value.title}
            </div>)}
        </div>
    );
};

export default Posts;