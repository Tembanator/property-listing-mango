import { FcGoogle } from 'react-icons/fc'

export default function OAuth() {
    return (
        <>
            <div className="relative">
                <button
                    type="button"
                    className="rounded bg-gray-100 text-gray-800 text-center w-full cursor-pointer py-2 font-semibold border hover:bg-gray-200 active:bg-gray-300 mt-4 block mb-5" >Continue with google</button>
                <FcGoogle className="absolute left-3 top-3 text-xl" />
            </div>
        </>
    )
}
