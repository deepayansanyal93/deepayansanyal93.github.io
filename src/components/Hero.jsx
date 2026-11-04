import { Link } from 'react-scroll'

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-8 py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">

        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Deepayan Sanyal
          </h1>
          <p className="text-xl text-[var(--color-primary)] font-semibold mb-3">
            Postdoctoral Associate at New York University
          </p>
          <p className="text-[var(--color-muted)] mb-6">
             Ph.D. in Computer Science, Vanderbilt University
          </p>
          <div className="flex flex-col gap-3 text-sm text-[var(--color-muted)] leading-relaxed mb-8">
            <p>
            I am a Postdoctoral Associate in the Department of Environmental Studies at New York University, where I work on plant-inspired AI and computational modeling of plant behavior. 
            My research explores how principles of plant behavior, including distributed sensing, decentralized computation, and coordinated growth, can inspire new approaches to artificial intelligence. 
            At the heart of this work is the question of how biological systems achieve decentralized intelligence and how these principles can inform our understanding of complex problem-solving.
            </p>
            <p>
            During my PhD in Computer Science at Vanderbilt University, I studied self-supervised learning and the generalization of visual representations under distribution shift. 
            My research explored how neural networks can learn robust object representations from viewpoint-rich visual experiences and transfer learned knowledge to novel objects. 
            More broadly, I am interested in understanding the mechanisms that enable learning systems to generalize beyond their training distributions, particularly how representations, learning objectives, and inductive biases contribute to robust performance under distribution shift.
            </p>
            <p>
              I am currently based in the San Francisco Bay Area. Happy to connect and discuss new opportunities, my past and present work!
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:opacity-90 cursor-pointer transition-opacity"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-medium hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/assets/img/DS_image.png"
            alt="Deepayan Sanyal"
            className="w-64 h-64 rounded-full object-cover object-[50%_30%] shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
