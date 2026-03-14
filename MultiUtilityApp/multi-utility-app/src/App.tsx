import React,{ useState } from "react";
import { FaFilePdf,FaFileAlt, FaFileImage, FaFileArchive,FaImage, FaRulerCombined, FaTools, FaFileUpload,FaBalanceScale } from "react-icons/fa";
import { TbMathSymbols } from "react-icons/tb";
type ToolId =
  | "pdf-image"
  | "pdf-text"
  | "matrix-calculator"
  | "file-converter"
  | "image-converter"
  | "image-resizer";

type Tool = {
  id: ToolId;
  name: string;
  description: string;
  icon: React.ReactNode;
};

const tools: Tool[] = [
  {
    id: "pdf-image",
    name: "PDF → Image (ZIP)",
    description: "Extract all pages from a PDF as images and download as a ZIP archive.",
    icon: <FaFileImage/>,
  },
  {
    id: "pdf-text",
    name: "PDF → Text",
    description: "Convert PDF content into selectable text directly in your browser.",
    icon: <FaFileAlt/>,
  },
  {
    id: "matrix-calculator",
    name: "Matrix Calculator",
    description: "Perform basic operations like addition, subtraction, and multiplication on matrices.",
    icon: <TbMathSymbols/>,
  },
  {
    id: "file-converter",
    name: "File Format Converters",
    description: "Convert between formats like PDF ⇄ DOCX and more.",
    icon: <FaFileArchive/>,
  },
  {
    id: "image-converter",
    name: "Image Format Converters",
    description: "Convert between PNG, JPG, JPEG, WEBP, and other common image formats.",
    icon: <FaFileImage />,
  },
  {
    id: "image-resizer",
    name: "Image Resizer",
    description: "Resize images by width and height while keeping quality.",
    icon: <FaRulerCombined  />,
  },
];

function App() {
  const [activeTool, setActiveTool] = useState<ToolId>("pdf-image");

  return (
    <div className="min-h-screen bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      {/*nav Bar*/}
      <nav className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-indigo-400 text-lg">
              <FaTools />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                SimpleTool
              </span>
              <span className="text-[11px] text-slate-400">
                Multi-utility workspace
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-4 text-xs text-slate-300 sm:flex">
            <button className="rounded-xl bg-slate-900/70 px-3 py-1.5 hover:bg-slate-800">
              Dashboard
            </button>
            <button className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-1.5 hover:border-teal-400">
              Docs
            </button>
            <button className="rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-3 py-1.5 text-slate-50 shadow-sm shadow-teal-500/40 hover:from-teal-400 hover:to-indigo-400">
              Get started
            </button>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto min-h-[calc(100vh-56px)] max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        {/* HERO / LANDING */}
        <section className="mb-6 rounded-3xl border border-slate-700/60 bg-slate-900/70 px-4 py-6 backdrop-blur-2xl shadow-xl shadow-black/50 sm:mb-8 sm:px-6 sm:py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 text-[11px] font-medium text-teal-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                New · Multi-utility toolkit
              </p>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                SimpleTool · Multi Utility Web App
              </h1>
              <p className="max-w-2xl text-sm text-slate-300">
                Convert PDFs, transform images, and crunch matrices from a
                single, clean interface. Pick a tool from the sidebar to begin.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/60 px-3 py-2">
                <span className="block text-[11px] text-slate-400">
                  Tools available
                </span>
                <span className="text-sm font-semibold">{tools.length}+</span>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/60 px-3 py-2">
                <span className="block text-[11px] text-slate-400">
                  Backend
                </span>
                <span className="text-sm font-semibold">Pluggable later</span>
              </div>
            </div>
          </div>
        </section>

      <div className="flex min-h-[60vh] flex-col">
        {/* Header */}
        <header className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Tool workspace
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Switch between utilities without leaving the page.
              </p>
            </div>
            {/* <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/70 px-4 py-2 text-xs text-slate-200 backdrop-blur-xl shadow-lg shadow-black/40">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/80 to-indigo-400/80 text-base">
               
              </span>
            </div> */}
          </header>

        {/* Layout */}
        <main className="flex flex-1 flex-col gap-6 lg:flex-row">
          {/* Sidebar: tool list */}
          <aside className="lg:w-72">
            <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-3 backdrop-blur-2xl shadow-xl shadow-black/50">
              <div className="mb-2 flex items-center justify-between px-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Tools
                </span>
                <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
                  {tools.length} utilities
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {tools.map((tool) => {
                  const isActive = tool.id === activeTool;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setActiveTool(tool.id as ToolId)}
                      className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition
                        ${
                          isActive
                            ? "bg-gradient-to-r from-teal-500/90 to-indigo-500/90 text-slate-50 shadow-md shadow-teal-500/25"
                            : "bg-slate-900/40 text-slate-200 hover:bg-slate-800/70"
                        }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-2xl text-lg ${
                          isActive
                            ? "bg-slate-950/30"
                            : "bg-slate-800/80 group-hover:bg-slate-700/80"
                        }`}
                      >
                        {tool.icon}
                      </span>
                      <div className="flex flex-1 flex-col">
                        <span className="text-xs font-medium sm:text-sm">
                          {tool.name}
                        </span>
                        <span className="text-[11px] text-slate-300 line-clamp-1">
                          {tool.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main panel */}
          <section className="flex-1">
            <div className="flex flex-col gap-4">
              {/* Tool header */}
              <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 backdrop-blur-2xl shadow-xl shadow-black/50">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {tools.find((t) => t.id === activeTool)?.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-300">
                      {tools.find((t) => t.id === activeTool)?.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/90" />
                    Ready for integration
                  </div>
                </div>
              </div>

              {/* Tool content */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Left side: main controls */}
                <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 backdrop-blur-2xl shadow-xl shadow-black/50">
                  {activeTool === "pdf-image" && <PdfToImageUI />}
                  {activeTool === "pdf-text" && <PdfToTextUI />}
                  {activeTool === "matrix-calculator" && <MatrixCalculatorUI />}
                  {activeTool === "file-converter" && <FileConverterUI />}
                  {activeTool === "image-converter" && <ImageConverterUI />}
                  {activeTool === "image-resizer" && <ImageResizerUI />}
                </div>

                {/* Right side: helper / preview */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 backdrop-blur-2xl shadow-xl shadow-black/50">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">
                      How it works
                    </h3>
                    <HelperText activeTool={activeTool} />
                  </div>
                  <div className="rounded-3xl border border-dashed border-slate-700/60 bg-slate-900/40 p-4 backdrop-blur-2xl shadow-inner shadow-black/40">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">
                      Preview / Output
                    </h3>
                    <p className="text-xs text-slate-300">
                      This area can show output previews, logs, or error
                      messages once backend logic is connected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-8 flex items-center justify-between border-t border-slate-800/70 pt-4 text-[11px] text-slate-400">
          <span>Multi Utility Web App · Front-end UI only</span>
          <span>Built with React & Tailwind CSS</span>
        </footer>
      </div>
      </main>
    </div>
  );
}

/* --- Individual Tool UIs (UI only; no real logic) --- */

function PdfToImageUI() {
  return (
    <div className="space-y-4 text-sm">
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          Upload PDF
        </label>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600/80 bg-slate-900/60 px-4 py-6 text-center text-xs text-slate-300 hover:border-teal-400/80 hover:bg-slate-900">
          <span className="mb-1 text-2xl"><FaFilePdf/></span>
          <span className="font-medium">Drop a PDF here or click to browse</span>
          <span className="mt-1 text-[11px] text-slate-400">
            Max size 20 MB · Single file
          </span>
          <input type="file" accept="application/pdf" className="hidden" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-4 py-2 text-xs font-medium text-slate-50 shadow-md shadow-teal-500/30 hover:from-teal-400 hover:to-indigo-400">
          <span>Convert to images</span>
        </button>
        <button className="rounded-xl border border-slate-600 bg-slate-900/70 px-3 py-2 text-xs text-slate-200 hover:bg-slate-800">
          Reset
        </button>
      </div>

      <p className="text-[11px] text-slate-400">
        Output will be bundled into a ZIP file containing one image per page
        once backend processing is available.
      </p>
    </div>
  );
}

function PdfToTextUI() {
  const [dummy, setDummy] = useState(
    "Extracted text from your PDF will appear here and can be copied."
  );

  return (
    <div className="space-y-4 text-sm">
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          Upload PDF
        </label>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600/80 bg-slate-900/60 px-4 py-6 text-center text-xs text-slate-300 hover:border-teal-400/80 hover:bg-slate-900">
          <span className="mb-1 text-2xl"><FaFilePdf/></span>
          <span className="font-medium">Drop a PDF here or click to browse</span>
          <span className="mt-1 text-[11px] text-slate-400">
            When wired to backend, text will auto-populate below.
          </span>
          <input type="file" accept="application/pdf" className="hidden" />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          Extracted text
        </label>
        <textarea
          className="min-h-[150px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/70 p-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-teal-400"
          value={dummy}
          onChange={(e) => setDummy(e.target.value)}
          placeholder="Text will appear here after processing."
        />
        <div className="flex justify-end">
          <button className="rounded-xl border border-slate-600 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-200 hover:bg-slate-800">
            Copy text
          </button>
        </div>
      </div>
    </div>
  );
}

function MatrixCalculatorUI() {
  return (
    <div className="space-y-4 text-sm">
      <div className="grid grid-cols-2 gap-3">
        <MatrixInput title="Matrix A" />
        <MatrixInput title="Matrix B" />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {["Add", "Subtract", "Multiply"].map((op) => (
          <button
            key={op}
            className="rounded-xl border border-slate-600 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 hover:border-teal-400 hover:bg-slate-800"
          >
            {op}
          </button>
        ))}
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-300">
          Result
        </label>
        <div className="flex min-h-[80px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/60 p-3 text-xs text-slate-400">
          The computed matrix will be displayed here.
        </div>
      </div>
    </div>
  );
}
type MatrixInputProps = {
  title: string;
};
function MatrixInput({ title }: MatrixInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="font-medium">{title}</span>
        <span className="text-[11px] text-slate-400">3 × 3 max</span>
      </div>
      <textarea
        className="min-h-[80px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/70 p-2 text-xs text-slate-100 outline-none focus:border-teal-400"
        placeholder="Enter values row-wise, separated by spaces and new lines."
      />
    </div>
  );
}

function FileConverterUI() {
  return (
    <div className="space-y-4 text-sm">
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          Upload file
        </label>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600/80 bg-slate-900/60 px-4 py-6 text-center text-xs text-slate-300 hover:border-teal-400/80 hover:bg-slate-900">
          <span className="mb-1 text-2xl"><FaFileUpload/></span>
          <span className="font-medium">Drop a file here or click to browse</span>
          <span className="mt-1 text-[11px] text-slate-400">
            Supports PDF, DOCX, PPTX, TXT (after integration).
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            From format
          </label>
          <select className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-teal-400">
            <option>Auto detect</option>
            <option>PDF</option>
            <option>DOCX</option>
            <option>PPTX</option>
            <option>TXT</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            To format
          </label>
          <select className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-teal-400">
            <option>DOCX</option>
            <option>PDF</option>
            <option>PPTX</option>
            <option>TXT</option>
          </select>
        </div>
      </div>

      <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-4 py-2 text-xs font-medium text-slate-50 shadow-md shadow-teal-500/30 hover:from-teal-400 hover:to-indigo-400">
        Convert file
      </button>

      <p className="text-[11px] text-slate-400">
        After integration, the converted file will be available as a download.
      </p>
    </div>
  );
}

function ImageConverterUI() {
  return (
    <div className="space-y-4 text-sm">
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          Upload image
        </label>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600/80 bg-slate-900/60 px-4 py-6 text-center text-xs text-slate-300 hover:border-teal-400/80 hover:bg-slate-900">
          <span className="mb-1 text-2xl"><FaImage/></span>
          <span className="font-medium">Drop an image here or click to browse</span>
          <span className="mt-1 text-[11px] text-slate-400">
            Supports PNG, JPG, JPEG, WEBP.
          </span>
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          Target format
        </label>
        <select className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-teal-400">
          <option>JPG</option>
          <option>PNG</option>
          <option>WEBP</option>
        </select>
      </div>

      <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-4 py-2 text-xs font-medium text-slate-50 shadow-md shadow-teal-500/30 hover:from-teal-400 hover:to-indigo-400">
        Convert image
      </button>

      <p className="text-[11px] text-slate-400">
        The converted image will be offered as a download once logic is wired.
      </p>
    </div>
  );
}

function ImageResizerUI() {
  return (
    <div className="space-y-4 text-sm">
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-300">
          Upload image
        </label>
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600/80 bg-slate-900/60 px-4 py-6 text-center text-xs text-slate-300 hover:border-teal-400/80 hover:bg-slate-900">
          <span className="mb-1 text-2xl"><FaBalanceScale/></span>
          <span className="font-medium">
            Drop an image here or click to browse
          </span>
          <span className="mt-1 text-[11px] text-slate-400">
            PNG, JPG, JPEG, WEBP supported.
          </span>
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-300">
            Width (px)
          </label>
          <input
            type="number"
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-teal-400"
            placeholder="e.g. 800"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-300">
            Height (px)
          </label>
          <input
            type="number"
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none focus:border-teal-400"
            placeholder="e.g. 600"
          />
        </div>
        <div className="flex items-end justify-between gap-2">
          <label className="inline-flex items-center gap-2 text-xs text-slate-300">
            <input
              type="checkbox"
              defaultChecked
              className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-950 text-teal-400"
            />
            Keep aspect
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 px-4 py-2 text-xs font-medium text-slate-50 shadow-md shadow-teal-500/30 hover:from-teal-400 hover:to-indigo-400">
          Resize image
        </button>
        <button className="rounded-xl border border-slate-600 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 hover:bg-slate-800">
          Reset
        </button>
      </div>

      <p className="text-[11px] text-slate-400">
        Once connected, the resized image will be shown in the preview panel and
        downloadable.
      </p>
    </div>
  );
}

const contentMap: Record<ToolId, string> = {
  "pdf-image":
    "Upload a PDF, then trigger conversion to generate one image per page. The backend can stream progress and provide a ZIP link.",
  "pdf-text":
    "Send the PDF to a text-extraction endpoint and update the textarea with the response. Enable copy-to-clipboard for quick reuse.",
  "matrix-calculator":
    "Parse each matrix from textarea input, validate dimensions, then compute the selected operation and render a formatted result.",
  "file-converter":
    "Detect the input file type server-side and route to the appropriate conversion pipeline. Show file name, size, and final download.",
  "image-converter":
    "Pass the image and desired target format to an image-processing service and return the converted file as a blob download.",
  "image-resizer":
    "Read current dimensions, calculate new size based on aspect-ratio rules, and stream the processed image back to the client.",
};
type HelperTextProps = {
  activeTool: ToolId
}
function HelperText({ activeTool }: HelperTextProps) {
  return (
    <p className="text-xs leading-relaxed text-slate-300">
      {contentMap[activeTool]}
    </p>
  );
}

export default App;
