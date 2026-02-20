const Intro = () => {
    const contactButton = [
        {
            id: 1,
            title: "email",
            path: '@princessonyinyec12@gmail.com',
        },
        {
            id: 2,
            title: "github",
            path: 'https://github.com/reacher-tech ',
        },
        {
            id: 3,
            title: "phone",
            path: '',
        },
        {
            id: 4,
            title: "linkedin",
            path: 'https://www.linkedin.com/in/princess-aribodor-983b39291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
        },
    ]
    
    const handleClick = (id, button) => {
        console.log(`Clicked ${button.title} with id ${id}`);
        window.location.href = button.path; 
    }    
    
    return (
        <div className="relative overflow-hidden">
            <div className="justify-center p-12 m-4 mt-7 shadow">
                <h1 className="text-amber-900 align-middle text-3xl mb-4">Welcome!</h1>
                <p className="text-xl text-[#2C1332] pb-6 p-5">
                    Meet Onyin 😊 <br />
                    This is my first successful portfolio project 🎉 <br />
                    i'm a junior frontend developer 👨🏾‍💻 <br />
                    my knowledge skillset include javascript, vue, react, css, tailwind, typescript<br/>
                    this site introduces my knowledge of web development, i hope you have a wonderful user experience.
                </p>
                <span className="py-10 underline decoration-double text-amber-900 text-2xl">would you like to contact me</span>
            </div>
            
            <div className="flex justify-around w-[70%] p-10">
                {contactButton.map((button, index) => (
                    <button
                        key={button.id}  
                        className="px-4 py-2 bg-[#2C1332] text-white rounded hover:px-6 hover:bg-amber-950 shadow"
                        onClick={() => handleClick(button.id, button)}
                    >
                        {button.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Intro