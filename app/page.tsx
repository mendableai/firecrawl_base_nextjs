import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Firecrawl Style Guide",
  description: "A beautiful style guide showcasing design elements for the Firecrawl template",
};

export default function StyleGuidePage() {
  return (
    <div className="px-4 sm:container py-6 sm:py-10 max-w-5xl mx-auto font-inter">
      <div className="flex mb-8">
      <Image src="/firecrawl-logo-with-fire.png" alt="Firecrawl Logo" width={200} height={200} />
      </div>
    
      <div className="mb-10">
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-md">
          <h1 className="text-[2.5rem] @lg:text-[3.8rem] text-center text-[#36322F] font-semibold tracking-tight leading-[0.9] mt-4 opacity-0 animate-fade-up [animation-duration:var(--d-3)] [animation-delay:var(--t-1)]">
            Turn websites into<br/>
            <span className="block leading-[1.1] opacity-0 animate-fade-up [animation-duration:var(--d-3)] [animation-delay:var(--t-2)]">
              <span className="relative px-1 text-transparent bg-clip-text bg-gradient-to-tr from-red-600 to-yellow-500 inline-flex justify-center items-center">
                LLM-ready data
              </span>
            </span>
          </h1>
          <p className="text-xs text-center mt-4 text-muted-foreground">Gradient text with fade-up animations</p>
        </div>
      </div>
      <Separator className="my-10" />
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Buttons</h2>
        <p className="text-muted-foreground mb-6">Custom button styles for the application</p>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="code" className="flex flex-row justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code-xml"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
              Get Code
            </Button>
            
            <Button variant="orange" className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Run
            </Button>
            
            <Button variant="code" className="whitespace-nowrap">
              <span className="hidden sm:inline">Start for free (500 credits)</span>
              <span className="sm:hidden">Start for free</span>
            </Button>
          </div>
          
          <div className="pt-2">
          </div>
        </div>
      </section>
      <Separator className="my-10" />
      


      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Resource Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mendableai/firecrawl/tree/main/examples"
            className="block group"
          >
            <div className="bg-white/50 dark:bg-zinc-950/25 p-4 rounded-lg hover:shadow-md transition-all h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5 text-zinc-700 dark:text-zinc-300">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">30+ Examples</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3.5 w-3.5 text-zinc-400 group-hover:text-orange-400 ml-auto">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">Collection of simple projects built with Firecrawl</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-600 dark:bg-orange-900 dark:text-orange-300">TypeScript</span>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-600 dark:bg-orange-900 dark:text-orange-300">Python</span>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-600 dark:bg-orange-900 dark:text-orange-300">Firecrawl SDK</span>
                </div>
              </div>
            </div>
          </a>
          
          <div className="p-4 rounded-lg flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 h-full">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Additional resource links can be added here</p>
          </div>
        </div>
      </section>
      <Separator className="my-10" />
      
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Form Elements</h2>
        <p className="text-muted-foreground mb-6">Text inputs and form controls</p>
        <div className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="default-input" className="text-sm font-medium">Default Input</label>
            <Input id="default-input" placeholder="Enter text here..." className="w-full" />
          </div>
          
          <div className="space-y-3">
            <label htmlFor="disabled-input" className="text-sm font-medium">Disabled Input</label>
            <Input id="disabled-input" placeholder="Disabled input" disabled className="w-full" />
          </div>
    
          <Separator className="my-4" />
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Checkbox</h4>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">
                Accept terms and conditions
              </label>
            </div>
          </div>
        </div>
      </section>
      <Separator className="my-10" />
      
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-3"> Form</h2>
        <p className="text-muted-foreground mb-6">Interactive form with hover and thumb effects</p>
        <div>
          <div className="flex flex-col md:flex-row w-full items-start gap-4">
            <div className="flex flex-col md:flex-row w-full flex-1 gap-4">
              <Input 
                className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 relative" 
                placeholder="https://docs.firecrawl.dev" 
              />
              <div className="flex flex-row gap-4">
                <Button 
                  variant="code" 
                  className="h-9 px-4 rounded-[10px] text-sm font-medium items-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-[#36322F] text-[#fff] hover:bg-[#4a4542] disabled:bg-[#8c8885] disabled:hover:bg-[#8c8885] [box-shadow:inset_0px_-2.108433723449707px_0px_0px_#171310,_0px_1.2048193216323853px_6.325301647186279px_0px_rgba(58,_33,_8,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#171310,_0px_1px_3px_0px_rgba(58,_33,_8,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#171310,_0px_1px_2px_0px_rgba(58,_33,_8,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 flex flex-row gap-2 lg:w-full text-nowrap max-w-[150px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                  Get Code
                </Button>
                <Button 
                  variant="orange" 
                  className="h-9 px-4 rounded-[10px] text-sm font-medium flex items-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-orange-500 text-white hover:bg-orange-300 dark:bg-orange-500 dark:hover:bg-orange-300 dark:text-white [box-shadow:inset_0px_-2.108433723449707px_0px_0px_#c2410c,_0px_1.2048193216323853px_6.325301647186279px_0px_rgba(234,_88,_12,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#c2410c,_0px_1px_3px_0px_rgba(234,_88,_12,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#c2410c,_0px_1px_2px_0px_rgba(234,_88,_12,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 max-w-20"
                >
                  Run
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-3">Additional Form Example</h3>
          <div className="w-full flex flex-col flex-grow gap-6 rounded-lg bg-[#FBFAF9] bg-opacity-75 overflow-hidden py-4 px-4">
            <div className="w-full flex flex-col flex-grow gap-1">
              <label className="text-sm font-medium">URL</label>
              <div className="flex flex-col md:flex-row w-full items-start gap-4">
                <div className="flex flex-col md:flex-row w-full flex-1 gap-4">
                  <Input className="flex-1" placeholder="https://docs.firecrawl.dev" />
                  <div className="flex flex-row gap-4">
                    <Button variant="code" className="flex flex-row gap-2 lg:w-full text-nowrap max-w-[150px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml">
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                      </svg>
                      Get Code
                    </Button>
                    <Button variant="orange" className="max-w-20">Run</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="w-full -mt-4">
              <AccordionItem value="options">
                <AccordionTrigger className="py-4 text-sm font-medium hover:underline flex items-center justify-start gap-2 [&[data-state=open]>svg]:rotate-180">
                  <span>Options</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 pt-0 flex flex-col gap-4">
                    <div className="flex flex-col bg-[#FBFAF9] dark:bg-zinc-900 lg:px-6 py-6 rounded-md">
                      {/* Page Options Header */}
                      <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                        <h3 className="text-base font-semibold text-foreground pb-2 sm:pb-0">Page Options</h3>
                        <Button asChild variant="link" className="text-xs text-muted-foreground hover:text-foreground p-0 h-auto justify-start sm:justify-end">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <HelpCircle className="h-3 w-3 mr-1" />
                            Check the docs for more options
                          </a>
                        </Button>
                      </div>

                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="exclude-tags" className="text-sm font-medium block mb-1.5 text-foreground">Exclude Tags</label>
                              <Input id="exclude-tags" placeholder="script, .ad, #footer" />
                            </div>
                            <div>
                              <label htmlFor="include-tags" className="text-sm font-medium block mb-1.5 text-foreground">Include Only Tags</label>
                              <Input id="include-tags" placeholder="article, .content" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="wait-for" className="text-sm font-medium block mb-1.5 text-foreground">Wait for (ms)</label>
                              <Input id="wait-for" type="number" placeholder="1000" />
                            </div>
                            <div>
                              <label htmlFor="timeout" className="text-sm font-medium block mb-1.5 text-foreground">Timeout (ms)</label>
                              <Input id="timeout" type="number" placeholder="30000" />
                            </div>
                          </div>
                        </div>

                        {/* Right side: Checkboxes and Output Formats (with vertical separator on lg) */}
                        <div className="flex-1 lg:pl-6 lg:border-l lg:border-zinc-200 dark:lg:border-zinc-700 space-y-5">
                          {/* Standalone Checkboxes Section */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-foreground mb-2">Extraction Settings</h4>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="extract-main" defaultChecked />
                              <label
                                htmlFor="extract-main"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                              >
                                Extract main content (no headers, navs, etc.)
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="stealth-mode" />
                              <label
                                htmlFor="stealth-mode"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                              >
                                Use stealth mode <span className="text-xs text-muted-foreground">(5 credits/page)</span>
                              </label>
                            </div>
                          </div>
                          
                          <Separator />

                          {/* Output Formats Section */}
                          <div className="space-y-3">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-sm font-semibold text-foreground">Output Formats</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="format-markdown" defaultChecked />
                                <label htmlFor="format-markdown" className="text-sm font-medium text-foreground">Markdown</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="format-links" />
                                <label htmlFor="format-links" className="text-sm font-medium text-foreground">Links</label>
                              </div>
                              
                              <div className="col-span-2 sm:col-span-1 flex items-center space-x-1.5">
                                 <span className="text-sm font-medium text-foreground">JSON</span>
                                 <Button asChild variant="link" size="icon" className="p-0 h-5 w-5 text-muted-foreground hover:text-foreground">
                                   <a href="#" target="_blank" rel="noopener noreferrer" aria-label="JSON documentation"> <HelpCircle className="h-4 w-4"/></a>
                                 </Button>
                              </div>

                              {/* HTML Types */}
                              <div className="col-span-2 space-y-2 pt-1">
                                <h5 className="text-xs font-semibold text-muted-foreground">HTML Types</h5>
                                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                                    <div className="flex items-center space-x-2">
                                      <Checkbox id="format-html" />
                                      <label htmlFor="format-html" className="text-sm font-medium text-foreground">HTML (cleaned)</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Checkbox id="format-rawHtml" />
                                      <label htmlFor="format-rawHtml" className="text-sm font-medium text-foreground">Raw HTML</label>
                                    </div>
                                </div>
                              </div>

                              <div className="col-span-2 space-y-2 pt-1">
                                <h5 className="text-xs font-semibold text-muted-foreground">Screenshot Types</h5>
                                 <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                                    <div className="flex items-center space-x-2">
                                      <Checkbox id="format-screenshot" />
                                      <label htmlFor="format-screenshot" className="text-sm font-medium text-foreground">Viewport</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Checkbox id="format-fullpage-screenshot" />
                                      <label htmlFor="format-fullpage-screenshot" className="text-sm font-medium text-foreground">Full Page</label>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <Separator className="my-10" />
      
   
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Tables + Pagination</h2>
        <p className="text-muted-foreground mb-6">Responsive table with advanced formatting</p>
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6" style={{opacity: 1, transform: "none"}}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history h-4 w-4 text-orange-600">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M12 7v5l4 2"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Extraction History</h2>
          </div>
          <div>
            <div className="rounded-lg bg-white dark:bg-zinc-900">
              <div className="w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b dark:[&_tr]:border-zinc-700">
                    <tr className="border-b border-zinc-200 dark:border-zinc-700 transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50">
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0">URLs</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0">Date</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0">Tokens</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0"></th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    <tr className="border-b border-zinc-200 dark:border-zinc-700 transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50">
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-3 max-w-xl">
                          <div className="h-8 w-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 text-zinc-600 dark:text-zinc-300">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-100 break-all">finance.yahoo.com</div>
                            <div className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                              <span className="truncate">https://finance.yahoo.com/news/apple-earnings-report-q3-2024-113000748.html</span>
                            </div>
                          </div>
                          <a href="https://finance.yahoo.com/news/curevac" target="_blank" rel="noopener noreferrer" className="ml-auto flex-shrink-0 p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-800">Apr 28, 25</span>
                          <span className="text-xs text-zinc-500">10:24 AM</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 font-mono">5,157</div>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex items-center justify-center space-x-2 mr-2">
                          <button className="p-1 gap-1 bg-white border text-black border-zinc-500/25 dark:bg-zinc-800 dark:text-zinc-100 rounded flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 stroke-zinc-700 dark:stroke-zinc-300">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" x2="12" y1="15" y2="3"></line>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700 transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50">
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-3 max-w-xl">
                          <div className="h-8 w-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 text-zinc-600 dark:text-zinc-300">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-100 break-all">firecrawl.dev</div>
                            <div className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                              <span className="truncate">https://firecrawl.dev</span>
                            </div>
                          </div>
                          <a href="https://firecrawl.dev" target="_blank" rel="noopener noreferrer" className="ml-auto flex-shrink-0 p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-800">Apr 17, 25</span>
                          <span className="text-xs text-zinc-500">02:38 PM</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 font-mono">1,156</div>
                        </div>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <div className="flex items-center justify-center space-x-2 mr-2">
                          <button className="p-1 gap-1 bg-white border text-black border-zinc-500/25 dark:bg-zinc-800 dark:text-zinc-100 rounded flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 stroke-zinc-700 dark:stroke-zinc-300">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" x2="12" y1="15" y2="3"></line>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2 pr-2 py-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 rounded-md px-3" disabled>Previous</button>
            <span className="px-2 text-sm">1 of 3</span>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 rounded-md px-3">Next</button>
          </div>
        </div>
      </section>
      <Separator className="my-10" />
      
       <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Colors</h2>
        <p className="text-muted-foreground mb-6">Primary colors and accents</p>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="h-16 sm:h-20 w-full bg-orange-500 rounded-md"></div>
              <div>
                <p className="font-medium text-sm">Primary</p>
                <p className="text-xs text-muted-foreground">#F97316 (Orange Button)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-16 sm:h-20 w-full bg-[#36322F] rounded-md"></div>
              <div>
                <p className="font-medium text-sm">Secondary</p>
                <p className="text-xs text-muted-foreground">#36322F (Dark Button)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-16 sm:h-20 w-full bg-[#FFEDD5] rounded-md"></div>
              <div>
                <p className="font-medium text-sm">Accent</p>
                <p className="text-xs text-muted-foreground">#FFEDD5 (Subtle Orange)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator className="my-10" />
      
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Typography</h2>
        <p className="text-muted-foreground mb-6">Font sizes and styles</p>
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Heading 1</h1>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Heading 2</h2>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Heading 3</h3>
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">Heading 4</h4>
            <h5 className="text-base sm:text-lg font-bold tracking-tight">Heading 5</h5>
            <h6 className="text-sm sm:text-base font-bold tracking-tight">Heading 6</h6>
          </div>
          
          <Separator className="my-4" />
       
          <Separator className="my-4" />
          
          <div className="space-y-4">
            <div>
              <p className="text-base sm:text-lg">Base text</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Regular paragraphs and content</p>
            </div>
            <div>
              <p className="text-sm">Small text</p>
              <p className="text-xs text-muted-foreground">Secondary information</p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h4 className="text-sm font-medium mb-3">Font Family</h4>
            <div className="p-3 border rounded-md bg-secondary/50">
              <p className="font-inter text-base sm:text-lg font-medium">Inter (Default)</p>
              <p className="font-inter">The quick brown fox jumps over the lazy dog.</p>
              <p className="font-inter text-xs text-muted-foreground">font-inter</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="border-t pt-4 mt-8 dark:border-zinc-700">
        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          Firecrawl Example Template
        </p>
      </footer>
    </div>
  );
}
