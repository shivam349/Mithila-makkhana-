import { Review } from "@/lib/types";
import { Star } from "lucide-react";

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Star size={18} className="text-accent" />
        <h3 className="text-lg font-semibold">Customer reviews</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-xl border border-muted/70 p-4 bg-muted/30">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>{review.user}</span>
              <span className="flex items-center gap-1 text-accent">
                <Star size={14} /> {review.rating.toFixed(1)}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
            <p className="text-xs text-muted-foreground mt-2">{new Date(review.date).toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
