
const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(value => <div key={value.id}>
                {value.id}
                {value.title}
                {value.body}

            </div>)}
        </div>
    );
};

export default Posts;