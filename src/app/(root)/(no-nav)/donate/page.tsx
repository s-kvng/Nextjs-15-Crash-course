import { Bitcoin, Copy, Share2, Shield, Lock, Eye, ExternalLink } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CryptoSelector } from "@/components/crypto-selector"
//import { MobileHeader } from "@/components/mobile-header"
import { Boundary } from "@/components/boundary"
import { AnonymityScore } from "@/components/anonymity-score"

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      
      <div className="mx-auto max-w-md space-y-6 p-4">
        {/* Hero Section */}
        <Boundary labels={["Support"]} color="cyan">
          <Card className="border-0 bg-black/40 backdrop-blur">
            <div className="p-6 text-center">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 p-[2px]">
                <div className="rounded-full bg-black px-4 py-1">
                  <Shield className="inline h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <h1 className="mb-2 bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-4xl font-bold text-transparent">
                Support Xolace
              </h1>
              <p className="text-gray-400">
                Help us keep anonymous social interactions truly private
              </p>
            </div>
          </Card>
        </Boundary>

        {/* Donate with Crypto Section */}
        <Boundary labels={["Crypto Donation"]} color="cyan">
          <Card className="border-0 bg-black/40 backdrop-blur">
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Donate with Crypto</h2>
                  <p className="text-sm text-gray-400">100% Anonymous Support</p>
                </div>
                <AnonymityScore score={98} />
              </div>
              
              <div className="mb-6 grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="group flex h-auto flex-col items-start gap-1 border-cyan-950 bg-black/50 p-4 transition-all hover:border-cyan-400 hover:bg-black"
                >
                  <div className="flex items-center gap-2">
                    <Bitcoin className="h-5 w-5 text-orange-500" />
                    <span>Bitcoin</span>
                  </div>
                  <span className="text-xs text-gray-400">Maximum Privacy</span>
                  <Lock className="invisible absolute right-2 top-2 h-4 w-4 text-cyan-400 group-hover:visible" />
                </Button>
                <Button 
                  variant="outline" 
                  className="group flex h-auto flex-col items-start gap-1 border-cyan-950 bg-black/50 p-4 transition-all hover:border-cyan-400 hover:bg-black"
                >
                  <div className="flex items-center gap-2">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Monero" 
                      width={20} 
                      height={20} 
                    />
                    <span>Monero</span>
                  </div>
                  <span className="text-xs text-gray-400">Enhanced Anonymity</span>
                  <Lock className="invisible absolute right-2 top-2 h-4 w-4 text-cyan-400 group-hover:visible" />
                </Button>
              </div>

              <CryptoSelector />
            </div>
          </Card>
        </Boundary>

        {/* Share Section */}
        <Boundary labels={["Share"]} color="cyan">
          <Card className="border-0 bg-black/40 backdrop-blur">
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Share Xolace</h2>
                  <p className="text-sm text-gray-400">
                    Spread privacy. Stay anonymous.
                  </p>
                </div>
                <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                  <Eye className="mr-2 h-4 w-4" />
                  Private Mode
                </Button>
              </div>

              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-300 opacity-20 blur-xl" />
                  <div className="relative rounded-lg bg-black p-4">
                    <Image 
                      src="/placeholder.svg" 
                      alt="QR Code" 
                      width={200} 
                      height={200} 
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <p className="mb-6 text-center font-mono text-sm text-cyan-400">xolace.anonymous</p>

              <div className="grid grid-cols-3 gap-3">
                <Button 
                  variant="outline" 
                  className="border-cyan-950 bg-black/50 transition-all hover:border-cyan-400 hover:bg-black"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button 
                  variant="outline" 
                  className="border-cyan-950 bg-black/50 transition-all hover:border-cyan-400 hover:bg-black"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  className="border-cyan-950 bg-black/50 transition-all hover:border-cyan-400 hover:bg-black"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Explore
                </Button>
              </div>
            </div>
          </Card>
        </Boundary>
      </div>
    </main>
  )
}

