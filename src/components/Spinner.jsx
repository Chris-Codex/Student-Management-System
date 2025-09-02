import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Spinner = () => {
    return (
        <div className="fixed z-999 inset-0 w-screen h-screen bg-black/70 flex items-center justify-center">
            <DotLottieReact
                src="https://lottie.host/c63642e9-8c14-494b-8bd0-69350043c4b3/oTXf9BNjIv.lottie"
                loop
                autoplay
                className='w-35 h-20'
            />
        </div>
    )
}

export default Spinner;