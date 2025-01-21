export function AnonymityScore({ score }: { score: number }) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-xs text-gray-400">Anonymity Score</div>
        <div className="relative h-6 w-6">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20" />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-cyan-400">
            {score}
          </div>
        </div>
      </div>
    )
  }
  
  