import ShortLinks from "./ShortLinks";

type childProps = {};

const Home = () => {
    return (
        <div className="flex flex-col items-center text-center gap-4">
            <div className=" w-24 h-24 rounded-full bg-orange-300"></div>
            <div className="flex flex-col gap-1">
                <h2>Okiemute Eyawo</h2>
                <h2>Frontend Engineer</h2>
            </div>
            <div className="flex flex-col gap-3">
                <ShortLinks linkname="Linkedin" link="https://www.linkedin.com" />
                <ShortLinks linkname="Github" link="https://www.linkedin.com" />
            </div>
        </div>
    );
};

export default Home;
