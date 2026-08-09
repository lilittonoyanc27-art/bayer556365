import React from 'react';
import { BookOpen, Check, HelpCircle, Award } from 'lucide-react';

export const GrammarGuide: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-5 sm:p-6 text-slate-200 text-sm space-y-6 shadow-xl backdrop-blur-md">
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/40">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white">
            Իսպաներենի վերադարձ բայեր (Los Verbos Reflexivos)
          </h2>
          <p className="text-xs text-slate-400">
            Քերականական համառոտ ուղեցույց և կանոններ
          </p>
        </div>
      </div>

      {/* Reflexive Pronouns Table */}
      <div>
        <h3 className="font-bold text-indigo-300 mb-2 flex items-center gap-1.5 text-xs sm:text-sm">
          <span>1. Վերադարձ դերանուններ (Pronombres Reflexivos)</span>
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/80 text-indigo-200">
              <tr>
                <th className="p-2.5">Դեմք (Persona)</th>
                <th className="p-2.5">Դերանուն (Pronombre)</th>
                <th className="p-2.5">Օրինակ (Ejemplo - levantarse)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 font-mono">
              <tr>
                <td className="p-2 text-slate-300">Yo (Ես)</td>
                <td className="p-2 text-amber-400 font-bold">me</td>
                <td className="p-2 text-emerald-400">me levanto</td>
              </tr>
              <tr>
                <td className="p-2 text-slate-300">Tú (Դու)</td>
                <td className="p-2 text-amber-400 font-bold">te</td>
                <td className="p-2 text-emerald-400">te levantas</td>
              </tr>
              <tr>
                <td className="p-2 text-slate-300">Él / Ella / Ud. (Նա)</td>
                <td className="p-2 text-amber-400 font-bold">se</td>
                <td className="p-2 text-emerald-400">se levanta</td>
              </tr>
              <tr>
                <td className="p-2 text-slate-300">Nosotros/as (Մենք)</td>
                <td className="p-2 text-amber-400 font-bold">nos</td>
                <td className="p-2 text-emerald-400">nos levantamos</td>
              </tr>
              <tr>
                <td className="p-2 text-slate-300">Vosotros/as (Դուք)</td>
                <td className="p-2 text-amber-400 font-bold">os</td>
                <td className="p-2 text-emerald-400">os levantáis</td>
              </tr>
              <tr>
                <td className="p-2 text-slate-300">Ellos / Ellas / Uds. (Նրանք)</td>
                <td className="p-2 text-amber-400 font-bold">se</td>
                <td className="p-2 text-emerald-400">se levantan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Stem Changes in Game Verbs */}
      <div>
        <h3 className="font-bold text-indigo-300 mb-2 text-xs sm:text-sm">
          2. Արմատական փոփոխություններ (Cambios de raíz):
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <li className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <strong className="text-amber-300">e → ie:</strong> despertarse (te despiertas), sentarse (nosotros sentamos - առանց փոփոխության!)
          </li>
          <li className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <strong className="text-amber-300">o → ue:</strong> acostarse (se acuesta, nos acostamos - առանց փոփոխության!)
          </li>
          <li className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <strong className="text-amber-300">e → i:</strong> vestirse (se viste)
          </li>
          <li className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <strong className="text-amber-300">Regular:</strong> lavarse, peinarse, ducharse, quedarse
          </li>
        </ul>
      </div>

      {/* Word Order Rule */}
      <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs leading-relaxed text-indigo-200">
        <strong className="text-amber-300 block mb-1">💡 Կանոն նախադասության կազմության համար:</strong>
        Վերադարձ դերանունը (<span className="text-white font-bold">me, te, se, nos, os, se</span>) միշտ դրվում է խոնարհված բայից անմիջապես ԱՌԱՋ:
        <br />
        Օրինակ՝ <em className="text-emerald-300">Carlos <u className="font-bold">se</u> acostó tarde.</em> / <em className="text-emerald-300"><u className="font-bold">Me</u> levanto temprano.</em>
      </div>
    </div>
  );
};
