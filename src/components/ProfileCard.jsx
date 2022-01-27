import pic from "../images/profile_pic.png";

const ProfileCard = () => {
    return (
        <div class="max-w-md mx-auto blue-glassmorphism rounded-t-3xl rounded-b-none md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-r-none shadow-md overflow-hidden md:max-w-6xl mb-6">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-60" src={pic} alt="Man looking at item at a store"/>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-700 font-semibold">My profile</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-white">About me</p>
            <div className="mt-2 text-slate-400">
                <p>
                    With a B.E in Computer Engineering and almost 13 years experience in engineering as a Software engineer and also QA/AutoQA,
                    I'm currently focusing my career on the Java ecosystem and on emerging technologies around DeFi.<br /><br />
                    As someone who loves technology and software development I get puzzled when I don't understand about what apps hide "under the hood".<br /><br />
                    I have a strong background in quality assurance and I always try to merge this knowledge with writing code. I hardly write a single line of production code without first writing a failing unit test as TDD became a passion and a friend in software craftsmanship. I like to play safe. :)<br /><br />
                </p>
                <p className="italic">"I believe that one child can make the difference and twelve that can change the world." - unknown.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfileCard;