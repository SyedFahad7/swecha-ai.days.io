# Contributing Guidelines

Welcome to the project! We encourage contributors to utilize the following tools while adhering to our design principles:

## Tools You Can Use

- **Windsurf**: A powerful IDE for developing your code efficiently.
- **Cline - Gemini**: Another great option for coding and collaboration.
- **Your Favorite AI Tools**: Feel free to use any AI tools that you find helpful.

## Using AI Tools Effectively

As a contributor, you are encouraged to utilize AI tools such as Windsurf, Cline - Gemini, or any other preferred tools to enhance your development experience. These tools can assist with code generation, debugging, and providing suggestions to improve your workflow.

### Guidelines for AI Tool Usage

- **Leverage AI for Code Suggestions**: Use AI tools to generate code snippets, but always review and modify the output to ensure it aligns with the project's design principles.
- **Maintain Design Consistency**: While using AI-generated code, ensure that your contributions adhere to the established design theme. This includes using the appropriate color schemes, typography, and layout structures.
- **Be Creative and Experiment**: Feel free to explore new ideas and approaches. The goal is to maintain the overall aesthetic while allowing for innovative solutions that enhance user experience.

### Design Principles

- **User-Centric Approach**: Always prioritize the user experience in your designs. Consider how users will interact with your components and ensure that they are intuitive and accessible.
- **Responsive Design**: Ensure that your designs are responsive and look great on various devices, especially mobile phones, as a significant portion of users will access the application through their mobile devices.
- **Visual Hierarchy**: Use typography and layout to create a clear visual hierarchy that guides users through the content seamlessly.

By following these guidelines, you can contribute effectively while utilizing the power of AI tools to enhance your development process. Happy coding!

## AI Collaboration Prompt

For guidelines on how to work effectively with AI tools, please refer to the [AI Collaboration Prompt](./prompt.txt) file.

## Design Consistency

When contributing, please ensure that your work aligns with the current design theme of the project. Here are some guidelines to follow:

### Page Structure

- Use the following structure for your pages:
  ```jsx
  <main className="min-h-screen bg-black text-white">
    {/* Background Grid */}
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-10">
        {/* Grid items here */}
      </div>
    </div>
  </main>
  ```

### Header Section

- Include a header section with a title and description:
  ```jsx
  <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">Your Title</h1>
  <p className="text-xl text-yellow-100/60 max-w-3xl mx-auto">Your Description</p>
  ```

### Interactive Elements

- Use buttons and links with hover effects:
  ```jsx
  <Link
    href="/some-path"
    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-sm font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
  >
    Button Text
  </Link>
  ```

### Typography

- Maintain consistent typography throughout your pages.

### Mobile Responsiveness

- Ensure that all text and elements are easily readable on mobile devices. Test your pages on various screen resolutions, especially on phones, as most users access content through their mobile devices. Use responsive utility classes to adjust text sizes and layouts accordingly.

### Reusable Components

- If applicable, import and use existing components to maintain consistency.

By following these guidelines, you will help ensure that our project remains cohesive and visually appealing. Happy coding!
