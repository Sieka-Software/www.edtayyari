import NoData from "../../assets/media/icons/NoData.svg";

export const EmptyData = () => {
    return (
        <div className='text-center'>
            <img src={NoData} alt='No Data' style={{width:"100%"}} />
        </div>
    )
}
