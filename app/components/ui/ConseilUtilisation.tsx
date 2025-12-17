import { Flame, AlertTriangle, Clock, Sparkles } from "lucide-react";

interface ConseilUtilisationProps {
  title?: string;
  conseils?: string[];
}

export default function ConseilUtilisation({
  title = "Conseils d’utilisation",
  conseils = [
    "Lors de la première utilisation, laissez brûler la bougie jusqu’à ce que toute la surface soit fondue.",
    "Coupez la mèche à environ 5 mm avant chaque allumage.",
    "Ne laissez jamais une bougie allumée sans surveillance.",
    "Placez la bougie sur une surface plane et résistante à la chaleur.",
    "Tenir hors de portée des enfants et des animaux.",
  ],
}: ConseilUtilisationProps) {
  return (
    <div className="bg-[#7A9B8E] rounded-2xl p-8 shadow-lg border border-[#2C2C2C]/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#7A9B8E]/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-zinc-200" />
        </div>
        <h3 className="text-2xl font-light text-[#2C2C2C]">
          {title}
        </h3>
      </div>

      <ul className="space-y-4">
        {conseils.map((conseil, index) => (
          <li key={index} className="flex gap-3">
            <div className="mt-1">
              <Flame className="w-4 h-4 text-zinc-200" />
            </div>
            <p className="text-[#2C2C2C]/70 leading-relaxed">
              {conseil}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-start gap-3 bg-[#7A9B8E]/10 rounded-xl p-4">
        <AlertTriangle className="w-5 h-5 text-zinc-200 mt-0.5" />
        <p className="text-sm text-[#2C2C2C]/70">
          Pour une utilisation optimale et en toute sécurité, respectez toujours
          les consignes indiquées.
        </p>
      </div>
    </div>
  );
}
