import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`Abhishek Bongale Here (short: Abhi). Keeping it simple.
        who am I ? Enthusastic by Heart, Engineer by profession.
        Wants to know why things works the way it works.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
