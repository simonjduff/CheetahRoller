using System;

namespace CheetahRoller.Domain
{
    public struct DiceSize
    {
        public DiceSize(int size)
        {
            if (size < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(size), size, "Size cannot be negative");
            }

            Size = size;
        }

        public int Size { get; }

        public static implicit operator DiceSize(int size)
        {
            return new DiceSize(size);
        }

        public static implicit operator int(DiceSize size)
        {
            return size.Size;
        }
    }
}