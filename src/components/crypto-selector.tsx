"use client"

import { Copy, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CryptoSelector() {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="flex-1 border-cyan-950 bg-black/50 text-gray-400 hover:border-cyan-400">
            <SelectValue placeholder="Select cryptocurrency for address" />
          </SelectTrigger>
          <SelectContent className="border-cyan-950 bg-black text-white">
            <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
            <SelectItem value="xmr">Monero (XMR)</SelectItem>
            <SelectItem value="eth">Ethereum (ETH)</SelectItem>
          </SelectContent>
        </Select>
        <Button 
          variant="outline" 
          size="icon" 
          className="border-cyan-950 bg-black/50 hover:border-cyan-400 hover:bg-black"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-cyan-950 bg-cyan-500/5 px-3 py-2 text-xs text-cyan-400">
        <Shield className="h-4 w-4" />
        <span>End-to-end encrypted address generation</span>
      </div>
    </div>
  )
}

