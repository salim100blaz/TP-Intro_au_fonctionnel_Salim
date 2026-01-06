// Variable globale (effet de bord)
let counter = 0;

/**
 * Fonction pure :
 * - mêmes entrées => même sortie
 * - aucun effet de bord
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Fonction impure :
 * - dépend d’un état externe (counter)
 * - modifie cet état
 */
export function increment(): number {
  counter++;
  return counter;
}

/*
Pourquoi add est-elle prévisible ?
→ Parce qu’elle ne dépend que de ses paramètres et ne modifie aucun état externe.

Pourquoi increment ne l’est pas ?
→ Parce qu’elle dépend d’une variable globale et change son état à chaque appel.
*/
