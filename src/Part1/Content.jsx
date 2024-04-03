  


// eslint-disable-next-line react/prop-types
export const Content = ({parts}) => {
  return (
    <div>
         {parts.map((x) => (
            <div key={x.length}>
                <p>{x.name}</p>
                <p>{x.exercises}</p>
            </div>
         ))}
    </div>
  )
}
