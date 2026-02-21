import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const topSpecimens = [
  {
    name: "Obsidian Tulip",
    category: "Flowers",
    sales: 124,
    revenue: "$14,880",
    image: "/api/placeholder/32/32", // Replace with your actual image path
  },
  {
    name: "Moonlight Fern",
    category: "Plants",
    sales: 98,
    revenue: "$8,330",
    image: "/api/placeholder/32/32",
  },
  {
    name: "Stone Vase",
    category: "Pottery",
    sales: 45,
    revenue: "$5,400",
    image: "/api/placeholder/32/32",
  },
  {
    name: "Arctic Seeds",
    category: "Seeds",
    sales: 32,
    revenue: "$640",
    image: "/api/placeholder/32/32",
  },
]

const TopProducts = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="font-mono uppercase tracking-tighter text-sm">Top_Specimens</CardTitle>
        <CardDescription>Highest performing nodes by volume.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {topSpecimens.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              {/* Rank Number */}
              <span className="text-xs font-mono text-muted-foreground w-4">
                0{index + 1}
              </span>
              
              {/* Specimen Image & Info */}
              <Avatar className="h-9 w-9 rounded-md border border-white/10">
                <AvatarImage src={item.image} alt={item.name} />
                <AvatarFallback className="text-[10px] bg-muted uppercase">
                  {item.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none group-hover:text-[#ecec25] transition-colors cursor-pointer">
                  {item.name}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {item.category}
                </p>
              </div>
            </div>

            {/* Sales Stats */}
            <div className="text-right">
              <p className="text-sm font-mono font-medium">{item.revenue}</p>
              <p className="text-[10px] text-muted-foreground">{item.sales} sold</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopProducts