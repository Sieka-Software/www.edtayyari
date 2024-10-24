import { useAppSelector } from "../../store"

export const Announcement = () => {
    const { config } = useAppSelector(state => state.master);

    return (
        <div className='announcement'>
            <p className="fw-600 dark-gray">{(config as any).announcementMessage}</p>
        </div>
    )
}
