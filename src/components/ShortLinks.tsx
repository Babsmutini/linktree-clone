type links = {
    icon?: string;
    linkname: string;
    link: string;
};

const ShortLinks = ({ icon, linkname, link }: links) => {
    const handleClick = () => {
        window.open(link, "_blank");
    };
    return (
        <>
            {icon && (
                <div
                    className="flex flex-col gap-1 w-[80%] rounded-md bg-orange-300"
                    onClick={handleClick}
                >
                    {icon}
                    <p>{linkname}</p>
                </div>
            )}
            <div
                className="flex flex-col gap-1 w-40 rounded-md bg-orange-300"
                onClick={handleClick}
            >
                <p>{linkname}</p>
            </div>
        </>
    );
};

export default ShortLinks;
