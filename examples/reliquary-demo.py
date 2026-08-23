"""Reliquary Theme - Syntax Showcase (Python)
A small demo module used to generate the README screenshot.
"""

from dataclasses import dataclass

VAULT_CAPACITY = 12


@dataclass
class Gem:
    name: str
    hex: str
    weight_carats: float


class VaultOverflowError(Exception):
    """Raised when the vault holds more gems than it can safely display."""


def appraise(gem: Gem) -> str:
    # Function calls, string interpolation, and numeric literals live together here.
    return f"{gem.name} appraised at {gem.weight_carats:.2f} carats ({gem.hex})"


def inventory(gems: list[Gem]) -> list[str]:
    if len(gems) > VAULT_CAPACITY:
        raise VaultOverflowError(f"Vault overflow: {len(gems)} gems exceeds capacity of {VAULT_CAPACITY}")

    try:
        return [appraise(gem) for gem in gems]
    except AttributeError as err:
        print(f"Failed to appraise vault contents: {err}")
        return []
