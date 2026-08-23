// Reliquary Theme - Syntax Showcase

import { useState, useEffect } from "react";

interface Gem {
  name: string;
  hex: string;
  weightCarats: number;
}

const VAULT_CAPACITY = 12;

export function ReliquaryVault({ gems }: { gems: Gem[] }) {
  const [selected, setSelected] = useState<Gem | null>(null);

  useEffect(() => {
    if (gems.length > VAULT_CAPACITY) {
      throw new Error(`Vault overflow: ${gems.length} gems exceeds capacity of ${VAULT_CAPACITY}`);
    }
  }, [gems]);

  function appraise(gem: Gem): string {
    // Function calls, string interpolation, and numeric literals live together here.
    return `${gem.name} appraised at ${gem.weightCarats.toFixed(2)} carats (${gem.hex})`;
  }

  try {
    return (
      <ul className="vault-inventory">
        {gems.map((gem) => (
          <li key={gem.hex} onClick={() => setSelected(gem)}>
            {appraise(gem)}
          </li>
        ))}
      </ul>
    );
  } catch (err) {
    console.error("Failed to render vault:", err);
    return <p>The vault is sealed.</p>;
  }
}
