const Card = ({children, bg = "bg-[#0f3652]"}) => {
    return (
        <>
            <div className= {`${bg} text-white p-6 rounded-lg shadow-md`}>
                {children}
            </div>
        </>
    )
}

export default Card