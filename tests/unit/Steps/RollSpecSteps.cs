using CheetahRoller.Domain;
using CheetahTesting;
using System.Linq;
using unit;
using Xunit;

namespace Unit.Steps
{
    public static class RollSpecSteps
    {
        public static void RollSpecInput<T>(this IGiven<T> given, string spec)
        where T : class, IHasRollSpecInput
        {
            given.Context.RollSpecInput = spec;
        }

        public static void BuildRollSpec<T>(this IWhen<T> when)
            where T : class, IHasRollSpec, IHasRollSpecInput
        {
            when.Context.RollSpec = new RollSpec(when.Context.RollSpecInput);
        }

        public static void SpecHasXDiceAtSizeY<T>(this IThen<T> then, params (int count, int size)[] specs)
        where T : IHasRollSpec
        {
            int totalCount = specs.Sum(s => s.count);

            Assert.Equal(totalCount, then.Context.RollSpec.Dice.Count());

            foreach (var spec in specs)
            {
                var dice = then.Context.RollSpec.Dice.Where(d => d.Size == spec.size);
                Assert.Equal(spec.count, dice.Count());
            }
        }
    }
}